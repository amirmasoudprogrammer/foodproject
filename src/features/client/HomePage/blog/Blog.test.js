import { render } from "@testing-library/react";
import Blog from "@/features/client/HomePage/blog/Blog";

test("Blog بدون خطا رندر می‌شود", () => {
    render(<Blog />);
});
