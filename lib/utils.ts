export class Utils { 
  static isActiveLink(
    href : string, currentPathname : string
  ) : boolean  {
    if(href === '/'){
      return href === currentPathname
    }
    return currentPathname.startsWith(href)
  } 
}