import React, { useState } from 'react'
import Option from '../../atoms/Option/option'
import './SerachSelect.css'


export default function SearchSelect({ className, line, setLine }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('دسته بندی')
    const [iconToggle, setIconToggle] = useState('down')
    const options = [
        { value: 'smart-watch', name: 'ساعت هوشمند' },
        { value: 'camera', name: 'دوربین عکاسی' },
        { value: 'data-projector', name: 'دیتا پروژکتور' },
        { value: 'portable-speaker', name: 'اسپیکر پرتابل' },
        { value: 'Manitor', name: 'مانیتور' },
        { value: 'camera-cctv', name: 'دوربین مداربسته' },
    ]

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        if(iconToggle == 'up'){
            setIconToggle('down')
        
    }else{
        setIconToggle('up')
    }
    }
    const handleSelect = (name) => {
        setSelected(name)
        setIsOpen(false)
        if(iconToggle == 'up'){
            setIconToggle('down')
        
    }else{
        setIconToggle('up')
    }
    }

    return (
        <div className={className}>
            
            <div className="search-select-selected" onClick={toggleDropdown}>
                   <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`search-select-icon ${iconToggle}`} 
                    >
                        <path d="M2.97976 5.31307C3.15727 5.13556 3.43505 5.11942 3.63079 5.26466L3.68687 5.31307L7.99998 9.62596L12.3131 5.31307C12.4906 5.13556 12.7684 5.11942 12.9641 5.26466L13.0202 5.31307C13.1977 5.49058 13.2138 5.76836 13.0686 5.9641L13.0202 6.02018L8.35353 10.6868C8.17602 10.8644 7.89825 10.8805 7.7025 10.7353L7.64643 10.6868L2.97976 6.02018C2.7845 5.82492 2.7845 5.50833 2.97976 5.31307Z" fill="#43454D" />
                    </svg>
                {selected}
            </div>
            {isOpen && (
                <ul className="search-select-dropdown">
                    {options.map((item, index) => (
                        <Option
                            key={index}
                            value={item.value}
                            className="search-option"
                            onClick={() => handleSelect(item.name)}
                        >
                            {item.name}
                        </Option>
                    ))}
                </ul>
            )}
        </div>
    )
}
