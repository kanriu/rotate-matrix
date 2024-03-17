import { useContext, useState } from "react";
import styles from "./Matrix.module.css";
import { GlobalContext } from "@/context";
import { ItemMatrix } from "./";
import { Button } from "@/components/common/button";

export const Matrix = () => {
  const { input, isShowButtonRotate, handleRotate } = useContext(GlobalContext);

  if (input.length === 0) return <></>;

  return (
    <section className={styles.container}>
      <div className={styles.matrixContent}>
        {input.map((element, index) => (
          <div className={styles.row} key={`${element[0]}-${index}`}>
            {element.map((item) => (
              <ItemMatrix value={item} key={item} />
            ))}
          </div>
        ))}
      </div>
      {isShowButtonRotate && <Button value={"Rotar"} onClick={handleRotate} />}
    </section>
  );
};
