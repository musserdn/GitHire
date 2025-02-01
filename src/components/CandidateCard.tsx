import React from 'react';
import CandidateDetails from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: CandidateDetails;
  onAdd: () => void;
  onIgnore: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onAdd, onIgnore }) => {
  return (
    <div className="tr">
      <img className="tr" src={candidate.avatar_url} alt={candidate.login} />
      <h2>{candidate.name}({candidate.login})</h2>
      <p>Location: {candidate.location}</p>
      <p>Email: <a href={`mailto:${candidate.email}`}>{candidate.email}</a></p>
      <p>Company: {candidate.company}</p>
      <p>Bio: {candidate.bio}</p>
      <div className="candidate-actions">
        <button onClick={onAdd}>Add</button>
        <button onClick={onIgnore}>Ignore</button>
      </div>
    </div>
  );
};

export default CandidateCard;