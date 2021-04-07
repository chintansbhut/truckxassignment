import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmButton extends Component {
    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = (event, data) => {
        this.props.confirmAction(event, data);
        this.setState({ open: false })
    }
    handleCancel = () => this.setState({ open: false })

    render() {
        let { buttonId, buttonColor, buttonText, isButtonBasic, icon, buttonSize } = this.props;

        return (
            <React.Fragment>
                {

                    <Button onClick={this.show} icon={icon} id={buttonId} size={buttonSize} color={buttonColor} basic={isButtonBasic} >{buttonText}</Button>

                }
                <Confirm
                    open={this.state.open}
                    content={this.props.confirmContent}
                    cancelButton='Cancel'
                    header={this.props.confirmHeader}
                    confirmButton="Ok"
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                    {...this.props}
                />
            </React.Fragment>
        )
    }
}
// ConfirmButton.defaultProps = {
//     confirmAction: () => { },
//     buttonText: 'Delete',
//     buttonClassName: '',
//     buttonColor: 'red',
//     confirmContent: 'Are you sure , you  want to  delete it ?',
//     confirmHeader: 'Delete Record',
//     isButtonBasic: true,
//     isCircular: false,
//     buttonSize: 'small'

// }
// ConfirmButton.propTypes = {
//     buttonId: PropTypes.string.isRequired,
//     confirmAction: PropTypes.func,
//     buttonText: PropTypes.string,
//     buttonClassName: PropTypes.string,
//     buttonColor: PropTypes.string,
//     confirmContent: PropTypes.string,
//     confirmHeader: PropTypes.string,
//     isButtonBasic: PropTypes.bool,
//     isCircular: PropTypes.bool,
//     buttonSize: PropTypes.string
// }
export default ConfirmButton;