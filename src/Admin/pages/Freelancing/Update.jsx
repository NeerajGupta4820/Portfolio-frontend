import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { updateCard } from '../../../redux/actions/freelancing'
import { deleteImageReducer } from '../../../redux/reducers/general'
import { Upload } from '../../../utils/Components'

const Update = ({ open, setOpen, card }) => {

    ////////////////////////////////////// VARIABLES //////////////////////////////////
    const dispatch = useDispatch()
    const { isFetching } = useSelector(state => state.freelancing)
    const { url } = useSelector(state => state.general)

    ////////////////////////////////////// STATES ////////////////////////////////////
    const [cardData, setCardData] = useState(card)

    ////////////////////////////////////// USE EFFECTS /////////////////////////////////
    useEffect(() => {
        setCardData(card)
    }, [card])
    useEffect(() => {
        setCardData({ ...cardData, image: url })
    }, [url])

    ////////////////////////////////////// FUNCTIONS /////////////////////////////////
    const handleUpdateCard = () => {
        dispatch(updateCard(cardData?._id, cardData, setOpen))
        dispatch(deleteImageReducer())
    }
    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }





    return (
        <Modal open={open} onClose={() => setOpen(false)} className='w-screen h-screen flex justify-center items-center ' >
            <div className="sm:w-[20rem] w-[90%] max-h-[80%] overflow-y-scroll border-textGray border-[1px] rounded-[4px] " >

                <div className="w-full flex justify-start items-center py-[12px] px-[8px] bg-lightGray text-white shadow-xl ">
                    <h3 className='text-[20px]   ' >Update Card</h3>
                </div>

                <div className="p-[1rem] bg-darkGray flex flex-col gap-[1rem] w-full " >
                    <div className="flex justify-center items-center w-full min-h-[10rem] bg-lightGray rounded-[8px] " >
                        <Upload image={cardData?.image} />
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-white `}>Title:</h6>
                        <TextareaAutosize
                            type='text'
                            autoComplete='off'
                            placeholder='Title'
                            value={cardData?.title}
                            name='title'
                            onChange={handleChange}
                            className={`w-full bg-black h-[40px] rounded-[4px] px-[8px] py-[8px] resize-none outline-none text-[16px] text-textGray text-start   `}
                        />
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-white `}>Link:</h6>
                        <TextareaAutosize
                            type='text'
                            autoComplete='off'
                            placeholder='Link'
                            value={cardData?.link}
                            name='link'
                            onChange={handleChange}
                            className={`w-full bg-black h-[40px] rounded-[4px] px-[8px] py-[8px] resize-none outline-none text-[16px] text-textGray text-start   `}
                        />
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-white `}>Category:</h6>
                        <TextareaAutosize
                            type='text'
                            autoComplete='off'
                            placeholder='Category'
                            value={cardData?.category}
                            name='category'
                            onChange={handleChange}
                            className={`w-full bg-black h-[40px] rounded-[4px] px-[8px] py-[8px] resize-none outline-none text-[16px] text-textGray text-start   `}
                        />
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-white `}>Parent:</h6>
                        <TextareaAutosize
                            type='text'
                            autoComplete='off'
                            placeholder='Parent'
                            value={cardData?.parent}
                            name='parent'
                            onChange={handleChange}
                            className={`w-full bg-black h-[40px] rounded-[4px] px-[8px] py-[8px] resize-none outline-none text-[16px] text-textGray text-start   `}
                        />
                    </div>
                    <div className={`flex flex-col `}  >
                        <h6 className={`capitalize w-full text-[16px] text-white `}>Descrition:</h6>
                        <TextareaAutosize
                            type='text'
                            autoComplete='off'
                            placeholder='Description'
                            value={cardData?.description}
                            name='description'
                            onChange={handleChange}
                            minRows={5}
                            maxRows={5}
                            className={`w-full bg-black h-[40px] rounded-[4px] px-[8px] py-[8px] resize-none outline-none text-[16px] text-textGray text-start overflow-y-scroll  `}
                        />
                    </div>
                    <div className='flex w-full justify-end gap-[8px] '>
                        <button onClick={() => setOpen(false)} className="bg-[#0d0d0d] text-white rounded-[4px] px-[6px] py-[4px]">
                            Close
                        </button>
                        <button onClick={handleUpdateCard} className="bg-orange text-white rounded-[4px] px-[6px] py-[4px]" >
                            {isFetching ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default Update