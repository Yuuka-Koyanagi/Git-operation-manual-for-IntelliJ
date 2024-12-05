import React from "react";
import Step from "../components/Step";
import InfoBox from "../components/InfoBox";

const HomePage = () => (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
        <section>
            <p>この手順書では、GitとGitHubの基本操作をIntelliJ IDEAで行う方法を解説します。</p>
        </section>

        <h2>準備</h2>
        <Step icon="📥" title="1. Gitのインストール">
            <ol>
                <li><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git公式サイト</a>から最新バージョンをダウンロード。</li>
                <li>インストール時に「Use Git from the command line and also from 3rd-party software」を選択。</li>
                <li>インストール後、Windows Terminalを開き<code>git --version</code>を実行して確認。</li>
            </ol>
        </Step>

        <Step icon="🔑" title="2. GitHubアカウントの作成">
            <ol>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub公式サイト</a>にアクセス。</li>
                <li>アカウントを作成し、メールアドレスを確認。</li>
            </ol>
        </Step>

        <Step icon="⚙️" title="3. IntelliJ IDEAの設定">
            <ol>
                <li>IntelliJ IDEAを起動。</li>
                <li><code>File &gt; Settings &gt; Version Control &gt; Git</code>を開く。</li>

                <li>「Path to Git executable」に<code>git.exe</code>のパスを設定。（例: <code>C:\Program Files\Git\bin\git.exe</code>）</li>
            </ol>
        </Step>

        <h2>補足</h2>
        <InfoBox>
            <p>より詳しい情報は以下を参照してください:</p>
            <ul>
                <li><a href="https://www.jetbrains.com/help/idea/using-git-integration.html" target="_blank" rel="noopener noreferrer">IntelliJ IDEAのGit統合</a></li>
                <li><a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">GitHub公式ドキュメント</a></li>
            </ul>
        </InfoBox>
    </main>
);

export default HomePage;
