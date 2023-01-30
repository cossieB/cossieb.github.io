import Modal from "../Modal";
import Project from "./Project";
import { selected, setSelected } from "./state";

export default function Details() {

    return (
        <Modal cleanup={() => setSelected(null)}>
            <Project
                idx={1}
                project={selected()!}
                withToggle={false}
            />
        </Modal>
    )
}