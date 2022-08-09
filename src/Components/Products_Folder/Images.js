import Image from "./Image"
// import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
// import { FaForward, FaBackward } from "react-icons/fa"

const Images = ({lists, select, updateOrder}) => {
  return (
    <>
        {/* <div>
      <VscChevronLeft />
    </div> */}
    {lists.map((list) => (
      <Image
      key={list.id}
      list={list}
      select={select}
      updateOrder={updateOrder} />
    ))}
        {/* <div>
      <VscChevronRight />
    </div> */}
  </>
  )
}

export default Images
