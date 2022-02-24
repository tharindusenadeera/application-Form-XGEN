import { AvatarComponent } from "../../components/inputComponents/AvatarComponent";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";

export const Avatar = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <td className="elementName">
        <h3>Avatar</h3>
      </td>
      <td>
        <Stack direction="row" spacing={2} sx={{ paddingLeft: 30 }}>
          <AvatarComponent
            alt="Remy Sharp"
            src="https://man-man.nl/app/uploads/2020/12/knappe-mannen-leggen-uit-.jpg"
            sx={{ width: 80, height: 80 }}
          />
          <AvatarComponent
            alt="Travis Howard"
            src="https://th.bing.com/th/id/OIP.Y8XOGVn1DKGvN2Euh2t-vQHaEo?pid=ImgDet&rs=1"
            sx={{ width: 60, height: 60 }}
          />
          <AvatarComponent
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ paddingLeft: 60 }}>
          <AvatarComponent>H</AvatarComponent>
          <AvatarComponent
            sx={{ bgcolor: deepOrange[500], width: 60, height: 60 }}
          >
            XG
          </AvatarComponent>
          <AvatarComponent
            sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}
          >
            XGEN
          </AvatarComponent>
        </Stack>
      </td>
    </>
  );
};
