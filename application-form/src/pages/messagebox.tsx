import { FC } from "react";
import { ButtonComponent } from "../components/input-components/ButtonComponent";
import { MessageBoxComponent } from "../components/input-components/MessageBoxComponent";
import { messagebox_component_props_types } from "../constants/interfaces";

export const MessageBox: FC<messagebox_component_props_types> = (props) => {
  console.log(props);

  return (
    <>
      <td className="elementName">
        <h3>Message Box</h3>
      </td>
      <td>
        <MessageBoxComponent
          title="Congratulations"
          message="Form submited successfully !, Please check your email to download your pdf"
          children={
            <>
              <ButtonComponent title="Ok" onClick={() => props.onClose()} />
            </>
          }
        />
      </td>
    </>
  );
};
