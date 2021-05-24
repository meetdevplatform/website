enum eStatus {
    pending, approved, rejected
}

interface teamMember {
    id: String;
    role: String;
}

interface reply {
    id: String ;
    user_id: String;
    text:  String;
    up_vote: Number;
    created_at: Date;
}

interface comment {
    id: String;
    user_id:  String;
    text: String ;
    reply: reply[];
    up_vote: Number;
    created_at: Date
}

export interface IProject {
    title:String;
    thumbnail_image: String;
    tag_line: String;
    story?: String;
    video?: String[];
    code_base_link?:String;
    team_member?: teamMember[],
    category: String;
    tags?: String[];
    owner:String;owner_img:String;
    likes: String[];
    comments: comment[],
    like_count:Number;
    views:Number,
    status?: eStatus // 0: pending, 1: approved, 2: rejected
}