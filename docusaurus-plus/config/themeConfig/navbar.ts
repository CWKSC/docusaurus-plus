import { github_username } from '../common';

export const navbar = {
    title: `${github_username}`,
    logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
    },
    items: [
        { label: 'Blog 博客', to: '/blog/', position: 'left' },
        { label: 'Tech Blog 技術博客', to: '/tech-blog/', position: 'left' },
        { label: 'Note 筆記', to: "/note/", position: 'left' },
        { label: 'Prog 編程', to: "/programming/", position: 'left' },
        { label: 'Node.js', to: "/node-js/", position: 'left' },
        { label: 'AI 人工智能', to: "/artificial-intelligence/", position: 'left' },
        { label: 'Algo 算法', to: "/algorithm/", position: 'left' },
        { label: 'Practical 實際', to: "/practical/", position: 'left' },
        // { label: 'Project 項目', to: "/project/", position: 'left' },
        { label: 'Interest 興趣', to: "/interest/", position: 'left' },
    ],
};
