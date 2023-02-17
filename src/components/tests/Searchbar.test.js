import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar";


describe("Testing the Search Component", () => {
    const setCityName = jest.fn()

    it('Snapshot the component', () => {
        const { container } = render(<SearchBar setCityName={setCityName}/>)
        expect(container).toMatchSnapshot()
    })

    it('expect the function to be called',()=>{
        setCityName.call()
        expect(setCityName).toBeCalled()
    })

});