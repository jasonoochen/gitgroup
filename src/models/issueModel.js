import { githubApiPreview } from "../remoteConnection/github/githubAPI";

export class Issue {
  id;
  owner;
  repos;
  title;
  body;
  state;

  /**
   * The Issue Constructor
   * @param id the issue id
   * @param title the title of the issue
   * @param body the text body of the issue
   * @param state the state of the issue: open or close
   */
  constructor(id, title, body, owner, repos, state) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.owner = owner;
    this.repos = repos;
    if (state && state !== "close" && state !== "open")
      throw new RangeError("State must be 'close' or 'open'.");
    this.state = state;
  }

  /**
   * @returns the id of the issue
   */
  getId() {
    return this.id;
  }

  /**
   * @returns the title of the issue
   */
  getTitle() {
    return this.title;
  }

  /**
   * change the issue title
   * @param title the title of the issue
   */
  setTitle(title) {
    this.title = title;
  }

  /**
   * @returns the text body of the issue
   */
  getBody() {
    return this.body;
  }

  /**
   * Change the issue body.
   * @param body the changed body you want of the issue
   */
  setBody(body) {
    this.body = body;
  }

  /**
   * @returns the state of the issue("open" or "close").
   */
  getState() {
    return this.state;
  }

  /**
   * Close the issue
   */
  close() {
    this.state = "close";
  }

  /**
   * Open the issue
   */
  open() {
    this.state = "open";
  }

  getOwner() {
    return this.owner;
  }

  getRepos() {
    return this.repos;
  }
}
