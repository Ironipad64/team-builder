import React from 'react';
import styled from "styled-components"

export default function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    return (
        <StyledMember>
            <form onSubmit={onSubmit}>
                <div>
                    <div className="name">
                        <label>
                            Name
                    <input
                                name="name"
                                type="text"
                                placeholder="type a name..."
                                maxLength="30"
                                value={values.name}
                                onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="email">
                        <label>
                            Email
                    <input
                                name="email"
                                type="email"
                                placeholder="type an email..."
                                maxLength="30"
                                value={values.email}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="role">
                        <label>
                            Role
                    <select name="role" value={values.role} onChange={onChange} >
                                <option value="">------select role------</option>
                                <option value="instructor">Backend engineer</option>
                                <option value="student">Frontend engineer</option>
                                <option value="tl">Designer</option>
                            </select>
                        </label>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </StyledMember>
    )
}




const StyledMember = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    padding-top: 60px;
    padding-bottom: 60px;

    

`