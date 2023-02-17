import { render, screen } from "@testing-library/react";
import CardComponent from "../CardComponent";
import WaterIcon from '@mui/icons-material/Water';

// YOU NEED TO SEPARATE 2 THINGS
// DATA & COMPONENT

describe("Testing the CardComponent",()=>{

    it('Snapshop testing', ()=>{
        const {container} = render(<CardComponent data="hello" icon={<WaterIcon/>}/>)
        expect(container).toMatchSnapshot()
    })

    it('testing to check if the component renders correctly on screen or not', ()=>{
        const {container} = render(<CardComponent data="hello" icon={<WaterIcon/>}/>)
        expect(screen.getByText('hello')).toBeTruthy()
    })
})