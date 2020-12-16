import React from 'react';

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
        <form onSubmit={onSubmit}>
            <div>
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

                <label>
                    email
                    <input
                        name="email"
                        type="email"
                        placeholder="type an email..."
                        maxLength="30"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>
                    role
                    <select name="role" value={values.role} onChange={onChange} />
                    <option value="">------select role------</option>
                    <option value="instructor">Backend engineer</option>
                    <option value="student">Frontend engineer</option>
                    <option value="tl">Designer</option>
                </label>

            </div>
        </form>
    )
}