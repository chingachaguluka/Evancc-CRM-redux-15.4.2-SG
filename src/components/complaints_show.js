import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchComplaint, deleteComplaint } from '../actions/index';

const buttonStyle = {
  margin: 12,
};

class ComplaintsShow extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount() {
        this.props.fetchComplaint(this.props.params.id);
    }

    handleDeleteClick() {
        this.props.deleteComplaint(this.props.params.id)
            .then( () => {
                this.context.router.push('/');
            });
    }

    render() {
        
        const { complaint } = this.props;

        if(!complaint) {
            return <div>Loading...</div>
        }

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">{complaint.name}<span className="text-right pull-right"> Complaint#: {complaint.id}</span></h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Phone(s):
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.phone}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Email:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.email}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Branch:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.branch}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Logged:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.dateLogged}</strong> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Status:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.status}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Description:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.description}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Resolver's Comments:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.resolverComments}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-xs-3 text-right">
                            Verifier's Comments:
                        </div>
                        <div className="col-xs-9">
                            <strong>{complaint.verifierComments}</strong> 
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-sm-9 col-sm-offset-3">
                            <Link to={`/complaints/update/${complaint.id}`} >
                                <button type="button" className="btn btn-primary">Update</button>
                            </Link>
                            <Link to="/">
                                <button type="button" className="btn btn-default">Return</button>
                            </Link>
                            <button type="button" className="btn btn-danger pull-right" onClick={this.handleDeleteClick.bind(this)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

function mapStateToProps(state) {
    return { complaint: state.complaints.complaint };
}

export default connect(mapStateToProps, { fetchComplaint, deleteComplaint })(ComplaintsShow);