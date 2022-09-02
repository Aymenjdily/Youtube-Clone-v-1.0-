import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setsearchTerm('');
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-row border-2 border-slate-600 pl-2 sm:mr-5"
        >
            <input
                className='border-none outline-none sm:w-[400px] w-full bg-black text-white'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            <IconButton
                type='submit'
            >
                <div className='items-center flex'>
                    <SearchIcon className='text-white'/>
                </div>
            </IconButton>
        </form>
    )
}

export default SearchBar
