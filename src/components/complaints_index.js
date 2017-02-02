import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchComplaints } from '../actions/index';

class ComplaintsIndex extends Component {

    componentWillMount(){
        this.props.fetchComplaints();
    }

    renderComplaints() {
        return this.props.complaints.map((complaint) => {  
            return (
                <li className="list-group-item borderless" key={complaint.id}>
                    <Link to={`complaints/${complaint.id}`} >
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                {complaint.name} <span className="text-right pull-right">Case#: <strong>{complaint.id}</strong> </span>
                            </div>
                            <div className="panel-body">
                                Status: <strong>{complaint.status} </strong>Logged: <strong>{complaint.dateLogged} </strong>
                                Branch: <strong>{complaint.branch} </strong>
                            </div>
                            
                        </div>
                    </Link>
                </li>
            );

        });     
    }


    render() {
        //console.log(this.props.complaints);
        return (
            <div>
                <div className="row">
                    <div className="col-sm-5 col-sm-offset-1">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Search</button>
                            </span>
                        </div>
                    </div>
                    
                    
                    <div className="col-sm-2 col-sm-offset-4">
                        <Link to="/complaints/new">
                            <button className="btn btn-primary">Log Complaint</button>
                        </Link>
                    </div>
                </div>

                <ul className="list-group borderless">
                    {this.renderComplaints()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { complaints: state.complaints.all };
}

export default connect(mapStateToProps, { fetchComplaints })(ComplaintsIndex);