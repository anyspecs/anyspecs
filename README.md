# AnySpecs

AnySpecs is a comprehensive ecosystem designed to extract, analyze, and share AI development session contexts across multiple platforms. It consists of three main components that work together to create a unified specification management system.

## Ecosystem

### 1. AnySpecs CLI

> **Code is cheap, Show me Any Specs.**

A unified command-line tool for exporting task session contexts from multiple AI development IDEs and analyzing them using various model APIs to extract universal specifications.

**Key Features:**
- **Multi-source Support**: Export from Cursor AI, Claude Code, and Kiro (with more platforms planned)
- **Multiple Export Formats**: Support for Markdown, HTML, and JSON
- **Project & Workspace Filtering**: Export chat sessions by project or current directory
- **Flexible Session Management**: List, filter, and export specific chat sessions
- **Default Export Directory**: All exported files are saved to `.anyspecs/` directory for easy organization
- **PPIO Multi-model API Analysis**: Summarize chat records into universal definition specifications
- **Server Push**: Upload exported files to remote servers (WIP - coming soon)

**Installation:**
```bash
pip install anyspecs
```

**Documentation:** [GitHub Repository](https://github.com/anyspecs/anyspecs-cli/blob/main/README_zh.md)

### 2. SpecShot

> **Speak less, LLMs do more.**

A browser extension that completes specification saving and assists in exporting session contexts from multiple model platforms. It can jump to ASAP for analysis and extraction using various model APIs, enabling cross-platform model conversion.

**Documentation:** [GitHub Repository](https://github.com/anyspecs/SpecShot)

### 3. ASAP (AnySpecs All-in-one Platform)
> **Ship your Specs Anywhere.**

A GitHub-like platform for community sharing and hosting of contexts. The demo is already live with Google OAuth SSO login. It can also be deployed and hosted privately. Designed with GitHub's design language, it supports multiple upload methods (web and CLI), application, sorting, and sharing of `.specs` files.

**Key Features:**
- **Community Context Sharing**: Host and apply task contexts while discovering quality contexts shared by other users
- **Cross-platform Context Reuse**: Solve the challenge of writing quality contexts by leveraging others' model contexts for similar problems
- **Enterprise Context Migration**: Enable efficient and economical context migration and reuse for teams and organizations
- **Private Deployment**: Support for private deployment and hosting

**Documentation:** [GitHub Repository](https://github.com/anyspecs/anyspecs-web)

## Use Cases

### For Individual Users
- Host and apply task contexts
- Discover and utilize quality contexts shared by other users
- Solve similar problems by leveraging existing model contexts
- Overcome the challenge of writing high-quality contexts

### For Enterprises & Teams
- **Cost-effective Context Management**: Instead of training base models with massive computing power and corpus, focus on context migration and reuse
- **Future-proof Approach**: Avoid wasted SFT (Supervised Fine-Tuning) work when base models undergo major iterations
- **Efficiency & Economy**: Balance efficiency and cost through context-based migration and reuse

## Why AnySpecs?

1. **Unified Ecosystem**: Seamlessly integrate multiple AI development platforms
2. **Community-driven**: Share and discover quality contexts from the community
3. **Enterprise-ready**: Support for private deployment and team collaboration
4. **Future-proof**: Focus on context reuse rather than expensive model training
5. **Cross-platform**: Work across different AI development environments

## Repositories

- **CLI Documentation**: [AnySpecs CLI](https://github.com/anyspecs/anyspecs-cli/blob/main/README_zh.md)
- **Browser Extension**: [SpecShot](https://github.com/anyspecs/SpecShot)
- **Platform Deployment**: [AnySpecs All-in-one Platform (ASAP)](https://github.com/anyspecs/anyspecs-web) (Live with Google OAuth SSO)

## Contributing

We welcome contributions to any component of the AnySpecs ecosystem. Please check the respective GitHub repositories for contribution guidelines.