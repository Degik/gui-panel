import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Dashboard from "../playground/Dashboard";
import UserSettings from "../components/UserSettings/UserSettings";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>

            <ComponentPreview path="/Dashboard">
                <Dashboard/>
            </ComponentPreview>
            <ComponentPreview path="/UserSettings">
                <UserSettings/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;