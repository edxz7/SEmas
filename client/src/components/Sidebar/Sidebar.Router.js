import ProfileIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from '@material-ui/icons/Create';

const items = [
    "divider",
    { label: "Perfil", Icon: ProfileIcon,
    items: [
      { name: "Perfil", label: "Perfil", route:'profile' },
    ]
   },
    {
      name: "dashboard",
      label: "Dashboaard",
      Icon: DashboardIcon,
      items: [
        { name: "Metricas", label: "Metricas", route:'metricas' },
        { name: "Tipos", label: "Tipos de usuario", route:'usertypes' }
      ]
    },
    "divider",
    {
      name: "registrar",
      label: "Registrar",
      Icon: CreateIcon,
      items: [
        { name: "Lista", label: "Inventario", route:'inventario' },
        { name: "Lista", label: "Ventas", route:'ventas' },
        "divider"
      ]
    }
  ];

export default items;