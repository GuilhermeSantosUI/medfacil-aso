import { DownloadSimple, FilePdf } from "@phosphor-icons/react";
import * as C from "./Employees.styles";

export function Employees() {
  return (
    <C.Container>
      <C.Content>
        <FilePdf size={32} color="red"/>

        <C.ContentText>
          <h4>TRANS- MUCONICO</h4>
          <C.Subtitle>2.1mb</C.Subtitle>
        </C.ContentText>
      </C.Content>

      <C.About>
        <DownloadSimple />
      </C.About>
    </C.Container>
  );
}
