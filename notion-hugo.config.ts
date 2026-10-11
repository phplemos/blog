import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        // When manual is false, every database and child page of page_url is
        // synced: databases into content/<database title>, pages into content/.
        manual: false,
        page_url: 'https://www.notion.so/phplemos-dev/PHPLEMOS-Blog-6c7b8e18e88b8226948b81a8a160da54',
        // When manual is true, list the mounts explicitly instead:
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
        ],
    }
}

export default userConfig;
