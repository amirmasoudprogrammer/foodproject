import { render } from "@testing-library/react";
import PopupImage from "@/features/client/HomePage/blog/module/PopupImage";

test("PopupImageBlog بدون خطا رندر می‌شود", () => {
    render(<PopupImage/>);
});
