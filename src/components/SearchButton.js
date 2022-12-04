import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const SearchButton = () => {
  
  return (
    <div className="search">
        <input type="text" name="" id=""  style={{height:"30px",width:"300px",color:"white",fontSize:"16px",textAlign:"center",backgroundColor:"rgb(20 20 20)",borderRadius:"5px",border:"1px solid white",alignSelf:"center",borderRight:"none",borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}} />
        <SearchRoundedIcon style={{color:"white",alignSelf:"center",border:"1px solid white",borderRadius:"5px",padding:"3px",borderLeft:"none",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"}} />
    </div>
  )
}

export default SearchButton