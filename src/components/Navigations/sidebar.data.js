import { FaLayerGroup } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GrGroup } from "react-icons/gr";

export const sidebarData = [
    {
        type: 'button',
        title: 'Dashboard',
        link: '/',
        icon: RxDashboard
    },
    {
        type: 'accordion',
        title: 'Projects',
        icon: FaLayerGroup,
        childIcon: 'icon',
        childKey: 'projects',
        childTextKey: 'projectName',
        linkPrefix: '/project'
    },
    {
        type: 'accordion',
        title: 'Team Members',
        icon: GrGroup,
        childIcon: 'img',
        childKey: 'users',
        childTextKey: 'displayName',
        linkPrefix: '/individual'
    }
]