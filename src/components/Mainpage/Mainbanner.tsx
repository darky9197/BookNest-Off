import styled from "styled-components";
import TextField from '@mui/material/TextField';
import searchresult from "../../assets/data/searchresult";
import Autocomplete from '@mui/material/Autocomplete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import girlwithbooks from "../../assets/girlwithbooks1.png";
import { useContext } from "react";
import { ACTIONS ,AppContext } from "../../Contexts";


const Bannercontainer = styled.div`
  min-width: 100%;
  background-color: var(--background-clr-3);
  padding: 4rem;
  height: 70vh;
`;

const Bannergrid = styled.div`
  display: grid;
  background-color: var(--background-clr-1);
  box-shadow: #00000019 0px 4px 12px;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100%;
  border-radius: 10px;
  border: 1px solid var(--clr-3);

  .search-container{
    padding: 1rem;
    .inner-search-container {
        padding: 1rem;
        h1 { margin: 0px; }
        .search-element {
            margin: 1.5rem 0px;
        }
    }
  }
  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Bannerimage = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0;
  max-height: 550px;
`;

function Mainbanner() {


    const { data } = useContext(AppContext);

    console.log(data.search)
    return (
        <Bannercontainer>
            <Bannergrid>
                <div className="search-container">
                    <div className="inner-search-container">
                        <h1>"The Ultimate Book Reselling Platform For Students"</h1>
                        <div className="search-element d-flex gap-1 justify-content-center">
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                sx={{ width: 300 }}
                                options={searchresult.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Search your College" />}
                                value={data.searchValue}
                                onChange={(event, newVal: string | null) => {
                                    event.preventDefault();
                                    data.dispatch({ type: ACTIONS.UPDATE_SEARCH, payload: { data: newVal } })
                                }}
                            />
                            <button className="btn btn-dark"><SearchOutlinedIcon /></button>
                        </div>
                    </div>
                </div>

                <div className="image">
                    <Bannerimage src={girlwithbooks} />
                </div>
            </Bannergrid>
        </Bannercontainer>
    );
}

export default Mainbanner;
