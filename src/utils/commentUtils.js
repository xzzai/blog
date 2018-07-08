import Gitalk from 'gitalk';

export function getGitTalk(pathname) {
    return new Gitalk({
        clientID: 'e4f6d691b0d289aed39a',
        clientSecret: '7a16a75276eba5e96c05164f6dd41c9a9bdf3c00',
        repo: 'blog-gitment',
        owner: 'mrmeisen',
        admin: ['mrmeisen'],
        id: pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    });
}

export function prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

export function formatDate(date) {
    const blogDate = new Date(date);
    const year = blogDate.getFullYear();
    const month = prefixInteger(blogDate.getMonth(), 2);
    const day = prefixInteger(blogDate.getDate(), 2);
    const hours = prefixInteger(blogDate.getHours(), 2);
    const minutes = prefixInteger(blogDate.getMinutes(), 2);
    const seconds = prefixInteger(blogDate.getSeconds(), 2);
    return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}