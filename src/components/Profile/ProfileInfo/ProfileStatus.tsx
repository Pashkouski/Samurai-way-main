import React from 'react';


type ProfileStatusType = {
    status: string
}


class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: true
    }

    activateEditMode = (props: boolean) => {
        this.setState( {
            editMode: props
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <span onDoubleClick={()=>this.activateEditMode(false)}> {this.props.status} </span>
                    </div>
                    : <div>
                        <input value={this.props.status} onBlur={()=>this.activateEditMode(true)} autoFocus/>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;