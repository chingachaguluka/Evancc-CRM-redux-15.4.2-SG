import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { fetchComplaint, updateComplaint } from '../actions/index';
import { getFormValues } from 'redux-form';

import 'react-widgets/dist/css/react-widgets.css';
import DropdownList from 'react-widgets/lib/DropdownList';


class ComplaintsUpdate extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
    }

     onSaveClick(formProps) {
         //console.log("Evaluate values of form on submit")
         //console.log(this.props.formValues);
         this.props.updateComplaint(formProps, this.props.params.id)
            .then( () => {
                this.context.router.push(`/complaints/${this.props.params.id}`);
            });
    }


    render() {
        
        const { fields: {name, phone, email, branch, dateLogged, loggedBy, status, description, 
            resolverComments, resolvedBy, dateResolved, verifierComments, verifiedBy, dateVerified}, handleSubmit, complaint } = this.props;
        const branches = ['Lilongwe', 'Limbe', 'Malangalanga', 'Mzuzu'];
        const complaintStatus = ['Unattended', 'Customer Contacted', 'Resolved', 'Closed']

        {/*if(!complaint) {
            return <div>Loading...</div>
        }*/}

       
        return (
            <div>
                <h3 className="text-center">Update complaint</h3>
                <form className="form-horizontal" onSubmit={handleSubmit(this.onSaveClick.bind(this))}>
                    <div className={`form-group ${name.touched && name.invalid ? 'has-error' : '' }`}>
                        <label htmlFor="name" className="col-sm-2 control-label">Customer's Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" {...name}  />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {name.touched ? name.error : ""}
                        </div>
                    </div>
                    <div className={`form-group ${phone.touched && phone.invalid ? 'has-error' : '' }`}>
                        <label htmlFor="phone" className="col-sm-2 control-label">Phone(s)</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="phone" {...phone} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {phone.touched ? phone.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="email" {...email} />
                        </div>
                    </div>

                    <div className={`form-group ${branch.touched && branch.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Branch</label>
                        <div className="col-sm-10">
                            <DropdownList data={branches} {...branch} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {branch.touched ? branch.error : ""}
                        </div>      
                    </div>
                    <div className={`form-group ${dateLogged.touched && dateLogged.invalid ? 'has-error' : '' }`}>
                        <label htmlFor="dateLogged" className="col-sm-2 control-label">Logging Date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateLogged" {...dateLogged}  />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {dateLogged.touched ? dateLogged.error : ""}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" defaultValue="Customer Care Agent" className="form-control hidden" {...loggedBy} />
                        </div>
                    </div>

                    <div className={`form-group ${status.touched && status.invalid ? 'has-error' : '' }`}>
                        <label className="col-sm-2 control-label">Status</label>
                        <div className="col-sm-10">
                            <DropdownList data={complaintStatus} {...status} />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {status.touched ? status.error : ""}
                        </div>     
                    </div>

                    <div className={`form-group ${description.touched && description.invalid ? 'has-error' : '' }`}>
                        <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="description" {...description}  />
                        </div>
                        <div className="text-help col-sm-10 col-sm-offset-2">
                            {description.touched ? description.error : ""}
                        </div> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="resolverComments" className="col-sm-2 control-label">Comments By Resolver</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="resolverComments" {...resolverComments}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control hidden" {...resolvedBy} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control hidden" {...dateResolved} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="verifierComments" className="col-sm-2 control-label">Comments By Verifier</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="verifierComments" {...verifierComments}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control hidden" {...verifiedBy} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control hidden" {...dateVerified} />
                        </div>
                    </div>

                    <div className="col-sm-9 col-sm-offset-2"> 
                        <button type="submit" className="btn btn-primary">Save</button>
                        <Link to={`/complaints/${complaint.id}`}>
                            <button className="btn btn-danger" >Cancel</button>
                        </Link>
                    </div>
                    
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        complaint: state.complaints.complaint,
        initialValues: state.complaints.complaint
    };
}

function validate (values) {
    const errors = {};

    if (!values.name) {
        errors.name = "Enter the name of the customer";
    }

    if (!values.phone) {
        errors.phone = "Enter the customer's phone number(s)";
    }

    if (!values.branch) {
        errors.branch = "Select the branch where the complaint was raised";
    }

    if (!values.dateLogged) {
        errors.dateLogged = "Enter the date the complaint was raised";
    }

    if (!values.status) {
        errors.status = "Select the status of the complaint";
    }

    if (!values.description) {
        errors.description = "Enter the detials of the complaint";
    }

    return errors;
}

ComplaintsUpdate = reduxForm({
  form: 'ComplaintsUpdateForm',
  fields: ['name', 'phone', 'email', 'branch', 'status',  'loggedBy', 'dateLogged', 'description', 
    'resolverComments', 'dateResolved', 'resolvedBy', 'verifierComments', 'verifiedBy', 'dateVerified'],
    validate
}, mapStateToProps, { fetchComplaint, updateComplaint })(ComplaintsUpdate);

export default ComplaintsUpdate;

