export interface IListRoute  {
    icon  : JSX.Element,
    link  : string,
    title : string,
}

export interface IListNav {
    title : string,
    link  : string,
}

export interface IListStatus  {
    title       : string,
    post        : number,
    link        : string,
    icon        : JSX.Element,
    iconButton  : JSX.Element,
    lastUpdate  : string
}

export interface ILayout {
    children : React.ReactNode
}