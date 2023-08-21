import { Thumb } from "./style";
import loading from "../../src/assets/loading.png";

export const Loading = () => {
  return (
    <>
      <Thumb>
        <img src={loading} alt="load" />
      </Thumb>
    </>
  );
};
