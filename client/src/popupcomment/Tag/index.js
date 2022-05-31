import "./app.css";

import React, { useContext, useCallback, useState, useEffect, setState, useRef, Component } from "react";

// export const Tag = ({ onSumbit }) => {
//     const [state, setState] = useState({ Tags: '', Input: "", })
//     const { name, age } = formData
//     const onChange = ({ target: { name, value } }) => { // destructuring 'name' and 'value'
//         setFormData(formData => ({ ...formData, [name]: value })) // spread formData, update field with 'name' key
//     }
//     return (
//         <>
//             <label>Name<input type="text" onChange={onChange} name="name" value={name} /></label>
//             <label>Age<input type="number" onChange={onChange} name="age" value={age} /></label>
//         </>
//     );
// }

// class Tag extends React.Component {



//     constructor(props) {
//         super(props);

//         this.state = {
//             tags: [
//                 'Tags',
//                 'Input'
//             ]
//         };

//     }

//     handleReturnParent = () => {
//         const newTags = [...this.state.tags];
//         console.log("test")
//         // this.props.onSelectLanguage(lang);
//     }


//     removeTag = (i) => {
//         const newTags = [...this.state.tags];
//         newTags.splice(i, 1);
//         this.setState({ tags: newTags });
//     }

//     inputKeyDown = (e) => {
//         const val = e.target.value;

//         if (e.key === 'Enter' && val) {
//             if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
//                 return;
//             }
//             this.setState({ tags: [...this.state.tags, val] });
//             this.tagInput.value = null;
//         } else if (e.key === 'Backspace' && !val) {
//             this.removeTag(this.state.tags.length - 1);
//         }
//     }

//     render() {
//         const { tags } = this.state;

//         return (

//             <div className="input-tag"  >
//                 <ul className="input-tag__tags">
//                     {tags.map((tag, i) => (
//                         <li key={tag}>
//                             {tag}
//                             <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
//                         </li>
//                     ))}
//                     <li className="input-tag__tags__input">
//                         <input type="text" id="tags"

//                             onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} /></li>
//                 </ul>
//             </div >
//         );
//     }
// }


// export default Tag;

const TagsInput = props => {
    const [tags, setTags] = React.useState(props.tags);
    props.onGetValve(tags);
    const removeTags = indexToRemove => {

        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {

        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);

            props.selectedTags([...tags, event.target.value]);


            event.target.value = "";
        }
    };
    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>

            <input className="form-control"
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Press enter to add tags"
            />

        </div>
    );
};
export default TagsInput;

// const App = () => {
// 	const selectedTags = tags => {
// 		console.log(tags);
// 	};
// 	return (
// 		<div className="App">
// 			<TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
// 		</div>
// 	);
// };
