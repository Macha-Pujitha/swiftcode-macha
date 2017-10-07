package data;

public class Message {
    public enum Sender{BOT,USER}
    public Sender sender;
    public String text;
    public String time;
    public FeedResponse feedResponse;

}
