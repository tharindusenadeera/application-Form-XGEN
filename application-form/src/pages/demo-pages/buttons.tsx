import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ButtonComponent } from "../../components/inputComponents/ButtonComponent";

export const Buttons = () => {
  return (
    <>
      <td className="elementName">
        <h3>Buttons</h3>
      </td>

      <td>
        {" "}
        {/* //simple btn */}
        <ButtonComponent
          loadingbtn={false}
          iconbtn={false}
          title="Click Me"
          color="secondary"
          size="large"
          variant="contained"
          onClick={() => alert("hello there simple button")}
          style={{ width: "300px" }}
        />
        {/* //loading btn */}
        <ButtonComponent
          loadingbtn
          loading
          onClick={() => alert("hello loading button")}
        />
        {/* //icon btn */}
        <ButtonComponent
          iconbtn
          sx={{ border: "1px solid grey", marginTop: "5px" }}
          children={<CloudUploadIcon />}
          onClick={() => alert("UPLOADING....")}
          size="large"
        />
        {/* //disabled button */}
        <ButtonComponent
          variant="contained"
          title="disabled"
          disabled={true}
          style={{ marginLeft: "15px" }}
        />
      </td>
    </>
  );
};
