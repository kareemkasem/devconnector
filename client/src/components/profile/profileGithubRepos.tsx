import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GithubRepoType } from "../../global.types";
import { getGithubRepos } from "../../store/actions/profile";
import { AppState } from "../../store/configureStore";

function ProfileGithubRepos({
  username,
  repos,
  getGithubRepos,
}: ProfileGithubReposProps) {
  useEffect(() => getGithubRepos(username), [getGithubRepos, username]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {repos.map(repo => (
        <div key={repo.id} className="repo bg-white p-1 my-1">
          <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
                Stars: {repo.stargazers_count}
              </li>
              <li className="badge badge-dark">
                Watchers: {repo.watchers_count}
              </li>
              <li className="badge badge-light">Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithubRepos);

interface ProfileGithubReposProps {
  username: string;
  repos: GithubRepoType[];
  getGithubRepos: (username: string) => void;
}
