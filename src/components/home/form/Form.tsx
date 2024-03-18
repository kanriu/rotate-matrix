import { Button } from "@/components/common/button";
import { InputText } from "@/components/common/input-text";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import styles from "./Form.module.css";
import { GlobalContext } from "@/context";

export const HomeForm = () => {
  const { saveInput } = useContext(GlobalContext);

  return (
    <Formik
      initialValues={{
        range: "",
      }}
      onSubmit={({ range }) => saveInput(Number(range))}
      validationSchema={Yup.object().shape({
        range: Yup.number()
          .typeError("Debe ser un número válido")
          .min(2, "Debe ser como mínimo 2 o mayor")
          .max(100, "Debe ser como máximo 100 o menor")
          .required("Este campo es requerido"),
      })}
    >
      {({ handleChange, handleBlur, values, errors }) => (
        <Form className={styles.container}>
          <InputText
            name="range"
            placeholder="Ingrese un rango"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.range}
            isError={!!errors.range}
          />
          <Button value={"Generar"} type="submit" />
        </Form>
      )}
    </Formik>
  );
};
