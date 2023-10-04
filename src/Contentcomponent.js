import { Frame, Card,Page,HorizontalStack,Box,Text,LegacyStack,Icon,TextField,Banner, Button,Tabs,LegacyCard,RangeSlider, Divider, ButtonGroup} from "@shopify/polaris"
import {PinMinor,  HorizontalDotsMinor,FolderMinusMajor,ButtonCornerPillMajor} from "@shopify/polaris-icons"
import logo2 from "./imgs/logo2-transformed.png"
import {useState, useCallback} from 'react';
import em from "./imgs/em (2).png"


const Contentcomponent = () => {
    const [selected, setSelected] = useState(0);
    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
      );

      const tabs = [
        {
          id: 'Block',
          content: 'Block',
          accessibilityLabel: 'All customers',
          panelID: 'all-customers-content-1',
        },
        {
          id: 'Icons',
          content: 'Icons',
          panelID: 'accepts-marketing-content-1',
        },
        {
          id: 'Style',
          content: 'Style',
          panelID: 'repeat-customers-content-1',
        },
      ];
    
  return (
    <Page fullWidth>
        <HorizontalStack wrap={false} align="space-between">
            <LegacyStack>
            <img src={logo2} style={{width:"24px"}} />
            <Text>Trust badges & icons ‑ Iconito</Text>
            </LegacyStack>
            <LegacyStack>
            <Icon source={PinMinor} />
            <Icon source={HorizontalDotsMinor} />
            </LegacyStack>
        </HorizontalStack>
        <div style={{marginTop:"15px"}}>
        <Card roundedAbove="xl">
            <HorizontalStack align="space-between">
            <LegacyStack alignment="center">
                <img src={logo2} alt="" style={{width:"38px"}}/>
                <Text fontWeight="bold" variant="headingMd">Iconito - Trust badges & icons</Text>
            </LegacyStack>
            <LegacyStack>
                <Button outline size="medium" icon={FolderMinusMajor}>
                    Tutorials
                </Button>

                <Button outline size="medium" icon={FolderMinusMajor}>
                    Plans List
                </Button>

                <Button outline size="medium" icon={FolderMinusMajor}>
                    Integrations
                </Button>

                <Button outline size="medium" icon={FolderMinusMajor}>
                    Help center
                </Button>
            </LegacyStack>
            </HorizontalStack>
        </Card>
        </div>

        <Page fullWidth backAction={{content: 'Settings', url: '#'}} title="Icons blocks">
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                    <HorizontalStack align="space-between">
                        <Card roundedAbove="xl"> 
                        <Text fontWeight="bold" variant="headingMd">Icon Size</Text>
                    <br/>
                    <HorizontalStack align="space-between" blockAlign="center">
                    <RangeSlider
                        output
                        value={40}
                    />
                    <TextField
                    type="number"
                    value={30}
                    autoComplete="off"
                    />


                    </HorizontalStack>
                    <br/>
                    <Divider/>
                    <Text fontWeight="bold" variant="headingMd">Colors</Text>
                    <br />
                    <HorizontalStack align="space-between">
                        <LegacyStack>
                        <Text>Background<br></br>color</Text>
                        <Button icon={ButtonCornerPillMajor}>#252525</Button>
                        </LegacyStack>

                        <LegacyStack>
                        <Text>Background<br></br>color</Text>
                        <Button icon={ButtonCornerPillMajor}>#252525</Button>
                        </LegacyStack>
                    </HorizontalStack>
                    <br/>
                    <HorizontalStack align="space-between">
                        <LegacyStack>
                        <Text>Background<br></br>color</Text>
                        <Button icon={ButtonCornerPillMajor}>#252525</Button>
                        </LegacyStack>

                        <LegacyStack>
                        <Text>Background<br></br>color</Text>
                        <Button icon={ButtonCornerPillMajor}>#252525</Button>
                        </LegacyStack>
                    </HorizontalStack>
                    <br/>
                    <Divider/>

                    <Text fontWeight="bold" variant="headingMd">Typography</Text>
                    <br />
                    <HorizontalStack align="space-between">
                        <div>
                        <Text>Title Font Size</Text>
                        <TextField type="number"
                            value={30}
                            autoComplete="off"/>                     
                        </div>

                        <div>
                        <Text>Title Font Size</Text>
                        <TextField type="number"
                            value={30}
                            autoComplete="off"/>
                        </div>
                     
                    </HorizontalStack>
                    <br/>
                    <HorizontalStack align="space-between">
                        <div>
                        <Text>Subtitle Font Size</Text>
                        <TextField type="number"
                        value={30}
                        autoComplete="off"/>
                        </div>

                        <div>
                        <Text>Subtitle Font Size</Text>
                        <TextField type="number"
                            value={30}
                            autoComplete="off"/>
                        </div>
                    </HorizontalStack>
                    <br/>
                    <Divider/>

                    <Text fontWeight="bold" variant="headingMd">Spacing</Text>
                    <br />
                    <HorizontalStack align="space-between">
                    <RangeSlider
                        output
                        value={40}
                        label="Block size"
                    />
                    <TextField type="number"
                        value={30}
                        autoComplete="off"/>
                    </HorizontalStack>
                    <br/>
                    <Text fontWeight="bold" variant="headingMd">Border Location</Text>
                    <br />
                    <HorizontalStack align="space-between">
                        <div>
                        <Text>Goes Up</Text>
                        <TextField type="number"
                        value={30}
                        autoComplete="off"/>
                        </div>

                        <div>
                        <Text>Goes Down</Text>
                        <TextField type="number"
                            value={30}
                            autoComplete="off"/>
                        </div>
                    </HorizontalStack>
                    <br/>

                    <HorizontalStack align="space-between">
                    <RangeSlider
                        output
                        value={40}
                        label="Space in between Block"
                    />
                    <TextField type="number"
                        value={30}
                        autoComplete="off"/>
                    </HorizontalStack>
                    <br/>
                    <ButtonGroup>
                        <Button>Save</Button>
                        <Button>Delete</Button>
                    </ButtonGroup>
                        </Card>
                        <div  className="custom-card">
                        <Card roundedAbove="xl">
                            <HorizontalStack align="center">
                                <Button>Desktop</Button>
                                <Button>Mobile</Button>
                            </HorizontalStack>
                            <br/>
                            <HorizontalStack  blockAlign="center" align="space-between">
                                <div align="center">
                                    <img src={em} alt="" style={{width:"50px"}}/>
                                    <Text fontWeight="bold">Any Question</Text>
                                    <Text>Contact Us Now</Text>
                                </div>
                                <div align="center">
                                    <img src={em} alt="" style={{width:"50px"}}/>
                                    <Text fontWeight="bold">Any Question</Text>
                                    <Text>Contact Us Now</Text>
                                </div>
                                <div align="center">
                                    <img src={em} alt="" style={{width:"50px"}}/>
                                    <Text fontWeight="bold">Any Question</Text>
                                    <Text>Contact Us Now</Text>
                                </div>
                                <div align="center">
                                    <img src={em} alt="" style={{width:"50px"}}/>
                                    <Text fontWeight="bold">Any Question</Text>
                                    <Text>Contact Us Now</Text>
                                </div>
                                
                            </HorizontalStack>

                        </Card>
                        <Banner
                                title="for premium features please upgrade your plan. for only a cup of coffe (4,99/mo) you can have almost unlimited features"
                                status="warning"
                                action={{content: 'Satrt 3-days trial', url: ''}}
                                onDismiss={() => {}}
                                >
                            </Banner>
                        </div>
                    </HorizontalStack>
            </Tabs>
        </Page>


    </Page>
  )
}

export default Contentcomponent
