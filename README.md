# Abstracta Coding Challenge

Browser Copilot is a browser extension that allows you to use existing or custom-built AI assistants to help you in everyday web application tasks.

## My output
<img width="1180" alt="Image" src="https://github.com/user-attachments/assets/f319a3ac-872c-4d34-b6b7-c83be92cc9d2" />
Normally, you would ask questions about the web, but for testing purpose, asked general questions that require steps to get final answer. 

## Development

### Agent Development

To develop a new agent, you can refer to the [agent-mock](./agent-mock), [agent-simple](./agent-simple) or [agent-extended](./agent-extended/) folders. The later is the most complete one with proper documentation on endpoints and `manifest.json`.

For the development environment, this project uses [devbox](https://www.jetpack.io/devbox) and [direnv](https://github.com/direnv/direnv).

To install all required dependencies (after installing devbox and direnv), run the following command:

```bash
devbox run install
```

Next, set appropriate environment variables in `agent-extended/.env`.

> To speed up development, you can comment out the Keycloak section, so you don't need to authenticate every time you want to try your copilot in the extension.
> If you don't comment out the Keycloak section, then you need to run `devbox run keycloak` to spin up Keycloak for authentication and use `test` `test` credentials for login (when requested by the browser extension).

To run the agent in dev mode, enabling automatic hot-reloading whenever any changes are detected in the agent source files, execute the following command:

```bash
devbox run agent
```

> If you want to debug the agent, you can start the agent with your preferred IDE, pointing to the relevant virtual environment created by devbox, and using IDE's debugger capabilities to run the [main script](./agent/gpt_agent/__main__.py).

For more details about the agent, please refer to [its readme](./agent/README.md).

### Browser Extension Development

If you plan to contribute changes to the browser extension, refer to the [browser-extension folder](./browser-extension).

To launch a Chrome browser with hot-reload capabilities, use the following command:

```bash
devbox run browser
```

To modify the default browser settings, consult [browser-extension/vite.config.ts](./browser-extension/vite.config.ts).

To build the final distribution of the extension, execute the following command:

```bash
devbox run build
```
