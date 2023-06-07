// import s from './App.module.css'
import {Admin, Resource} from "react-admin";
import {authProvider} from "../Providers/authProvider.ts";
import dataProvider from "../Providers/dataProvider.ts";
import TaskIcon from "@mui/icons-material/Task";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import WidgetsIcon from "@mui/icons-material/Widgets";
import TariffsList from "../entities/TariffsList.tsx";
import TariffsEdit from "../features/edit/TariffsEdit.tsx";
import TariffsCreate from "../features/create/TariffsCreate.tsx";
import BlockList from "../entities/BlockList.tsx";
import BlockEdit from "../features/edit/BlockEdit.tsx";
import BlockCreate from "../features/create/BlockCreate.tsx";
import FieldsList from "../entities/FieldsList.tsx";
import FieldsEdit from "../features/edit/FieldsEdit.tsx";
import FieldsCreate from "../features/create/FieldsCreate.tsx";
import TasksList from "../entities/TasksList.tsx";
import TasksEdit from "../features/edit/TasksEdit.tsx";
// import language from "../Providers/i18nProvider.ts"
export default () =>
    <Admin requireAuth
           dataProvider={dataProvider}
           authProvider={authProvider}
        // i18nProvider={language}
    >
        <Resource name="tariffs"
                  list={TariffsList}
                  edit={TariffsEdit}
                  create={TariffsCreate}/>
        <Resource name="blocks"
                  list={BlockList}
                  edit={BlockEdit}
                  create={BlockCreate}
                  icon={WidgetsIcon}/>
        <Resource name="fields"
                  list={FieldsList}
                  edit={FieldsEdit}
                  create={FieldsCreate}
                  icon={TextSnippetIcon}/>
        <Resource name="tasks"
                  list={TasksList}
                  edit={TasksEdit}
                  icon={TaskIcon}/>
    </Admin>