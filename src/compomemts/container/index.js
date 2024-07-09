import cx from "classnames"
const Container=({children ,bgColor="danger" ,color="white"})=>{
    return (
        <div className= {cx("container",`bg-${bgColor}` ,`text-${color}` ,"pb-5")}>
        {children}
      </div>
    );
  }
  
  export default Container;
  