Enumeration e = NetworkInterface.getNetworkInterfaces();
while(e.hasMoreElements())
{
    NetworkInterface n = (NetworkInterface) e.nextElement();
    Enumeration ee = n.getInetAddresses();
    while (ee.hasMoreElements())
    {
        InetAddress i = (InetAddress) ee.nextElement();
        System.out.println(i.getHostAddress());
    }
}