import { render, screen, within } from "@testing-library/react";
import CardBlog from "./CardBlog";

const mockData = {
    image: "/image/imgBlog2.jpg",
    name: "عنوان تستی",
    desc: "توضیحات تستی",
};

const mockSetPopupImage = jest.fn();

test("CardBlog بدون خطا رندر می‌شود و محتوا نمایش داده می‌شود", () => {
    render(<CardBlog data={mockData} setPopupImage={mockSetPopupImage} />);
});
