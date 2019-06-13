import React from 'react';
import unescape from 'lodash/unescape';
import moment from 'moment';

export default function QuestionItem(props) {
    var answerCountClasses = "status"
    var creationDate = moment(props.data.creationDate*1000).format("DD-MM-YYYY HH:mm:ss")
    if (props.data.answered) {
        answerCountClasses += " answered"
    }
    if (!props.data.answered && props.data.answerCount > 0) {
        answerCountClasses += " answered-accepted"
    }
    
    return (
        <tr key={props.index}>
        <td>
        <div className="question-summary narrow _gps">
          <div className="cp">
                <div className="votes">
                    <div className="mini-counts"><span title={props.data.score}>{props.data.score}</span></div>
                    <div>votes</div>
                </div>
                <div className={answerCountClasses}>
                    <div className="mini-counts"><span title={props.data.answerCount}>{props.data.answerCount}</span></div>
                    <div>answers</div>
                </div>
                <div className="views">
                    <div className="mini-counts"><span title={props.data.viewCount}>{props.data.viewCount}</span></div>
                    <div>views</div>
                </div>
            </div>
            <div className="summary">
                <h3 className="summary-h3"><a href="/">{unescape(props.data.title)}</a></h3>
                <div className="tags t-php t-mysql">
                    {props.data.tags.map((item, index) => <a key={index} href="/" className="post-tag" title="" rel="tag">{item}</a>)}
                </div>
                <div className="started">
                    <a href="/" className="started-link">created <span title={creationDate} className="relativetime">{creationDate}</span></a>
                    <a className="started-user" href="/">{unescape(props.data.owner.displayName)}</a> <span className="reputation-score" title={`Reputation ${props.data.owner.reputation}`}  dir="ltr">{props.data.owner.reputation}</span>
                </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }