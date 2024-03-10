import { Stack } from "@mui/material"
import { categories} from '../utils/Constants'

export default function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack
        direction="row"
        sx={{overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: {md: 'column'}}}
    >
        {categories.map((category) => {
            return (
                <button className="category-btn"
                style={{backgroundColor: category.name === selectedCategory && '#fc1503', color: 'white'}}
                key={category.name}
                onClick={()=> (setSelectedCategory(category.name))}>
                    <span style={{color: category.name === selectedCategory ? 'white' : '#f31503'}}>{category.icon}</span>
                    <span style={{marginLeft: '8px', opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
                </button>
            )
        })}
    </Stack>
  )
}
