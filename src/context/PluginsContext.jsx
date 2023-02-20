import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScreenOrientation } from "@awesome-cordova-plugins/screen-orientation";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { SplashScreen } from "@capacitor/splash-screen";
import { Geolocation } from "@capacitor/geolocation";
import { StatusBar } from "@capacitor/status-bar";
import { Network } from "@capacitor/network";
import { Capacitor } from "@capacitor/core";
import { Toast } from "@capacitor/toast";
import { App } from "@capacitor/app";

import Loading from "./../components/shared/Loading";
import { Dialog } from "@capacitor/dialog";

const PluginsContext = createContext();
export const usePlugins = () => {
  return useContext(PluginsContext);
};

export const PluginsProvider = ({ children }) => {
  const navigate = useNavigate();

  const [connectionStatus, setConnectionStatus] = useState(false);
  const [gpsStatus, setGpsStatus] = useState(true);
  const [loading, setLoading] = useState(true);

  let toastVisible = false;

  //#region Methods
  const initializer = async () => {
    setLoading(true);
    Network.addListener("networkStatusChange", ({ connected }) =>
      setConnectionStatus(connected)
    );

    //Set connection status
    await Network.getStatus().then(({ connected }) =>
      setConnectionStatus(connected)
    );

    const platform = Capacitor.getPlatform();

    if (platform !== "web") {
      await StatusBar.setBackgroundColor({ color: "#eca440" });
      await ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT);
      await Geolocation.requestPermissions()
        .then(() => setGpsStatus(true))
        .catch(() => setGpsStatus(false));

      App.addListener("backButton", ({ canGoBack }) => {
        if (toastVisible) {
          App.exitApp();
          return;
        }
        if (canGoBack) {
          navigate(-1);
        } else {
          toastVisible = true;
          Toast.show({
            text: "Presione de nuevo para salir",
          }).then(() =>
            setTimeout(() => {
              toastVisible = false;
            }, 2000)
          );
        }
      });
    }
    setLoading(false);
  };

  const showDialog = async (title, message) => {
    await Dialog.alert({
      title,
      message,
      buttonTitle: "OK",
    });
  };

  const getGeolocation = async () => {
    let refGeolocation = { latitude: null, longitude: null };
    await Geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(
      ({ coords: { latitude, longitude } }) =>
        (refGeolocation = { latitude, longitude })
    );
    return refGeolocation;
  };

  const takePicture = () => {
    return Camera.getPhoto({
      quality: 40,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.DataUrl,
    });
  };

  const hideSplashScreen = async () => {
    await SplashScreen.hide();
  };
  //#endregion Methods

  useEffect(() => {
    initializer();
  }, []);

  const value = {
    hideSplashScreen,
    connectionStatus,
    getGeolocation,
    takePicture,
    showDialog,
    gpsStatus,
  };

  return (
    <PluginsContext.Provider value={value}>
      {!loading ? children : <Loading />}
    </PluginsContext.Provider>
  );
};
