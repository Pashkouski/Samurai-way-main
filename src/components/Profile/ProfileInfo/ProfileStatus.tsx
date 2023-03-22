import React, {ChangeEvent} from 'react';


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<ProfileStatusType> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    /*        activateEditMode = (status: boolean) => {
                this.setState({
                    editMode: status
                })
                if (status) {
                    this.props.updateStatus(this.state.status)
                }
            }*/

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input
                            onChange={this.onChangeHandler}
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                            autoFocus
                        />
                    </div>
                    : <div>
                        <span
                            onDoubleClick={this.activateEditMode}> {this.props.status ? this.props.status : 'no status'} </span>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;