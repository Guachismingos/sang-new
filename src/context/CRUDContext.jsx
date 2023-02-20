import { createContext, useContext } from "react";
import {
  db,
  doc,
  setDoc,
  storage,
  ref,
  uploadBytes,
  collection,
  query,
  where,
  documentId,
  getDocs,
} from "../firebase/firebase";

import { Buffer } from "buffer";

const CRUDContext = createContext();

export const useCRUD = () => {
  return useContext(CRUDContext);
};

export const CRUDProvider = ({ children }) => {
  const newRequirement = (formValues) => {
    let files = [];
    files.push({
      id: "fileId",
      name: "cedula",
      file: Buffer.from(formValues?.fileId.split(",")[1], "base64"),
    });

    files.push({
      id: "fileDeposit",
      name: "deposito",
      file: Buffer.from(formValues?.fileDeposit.split(",")[1], "base64"),
    });

    files.push({
      id: "fileWater",
      name: "agua",
      file: Buffer.from(formValues?.fileWater.split(",")[1], "base64"),
    });

    files.push({
      id: "fileLight",
      name: "luz",
      file: Buffer.from(formValues?.fileLight.split(",")[1], "base64"),
    });

    files.push({
      id: "fileTaxes",
      name: "impuestos",
      file: Buffer.from(formValues?.fileTaxes.split(",")[1], "base64"),
    });
    let refValues = { ...formValues };
    files.forEach(({ id, name, file }) => {
      const storageRef = ref(
        storage,
        `/files/${formValues.primaryPhone}_${formValues.lastNames}/${name}.png`
      );
      uploadBytes(storageRef, file);
      refValues = { ...refValues, [id]: storageRef.fullPath };
    });
    const refRequirement = doc(collection(db, "requirements"));
    setDoc(refRequirement, refValues);
    return refRequirement.id;
  };

  const loadRequirementById = (idRef) => {
    const q = query(
      collection(db, "requirements"),
      where(documentId(), "==", idRef)
    );
    return getDocs(q);
  };

  const value = { newRequirement, loadRequirementById };

  return <CRUDContext.Provider value={value}>{children}</CRUDContext.Provider>;
};
