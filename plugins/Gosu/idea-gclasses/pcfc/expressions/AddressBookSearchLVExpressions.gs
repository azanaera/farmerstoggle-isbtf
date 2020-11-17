package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookSearchLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookSearchLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AddressBookSearchLV.pcf: line 25, column 53
    function initialValue_0 () : gw.api.contact.DrivingDirectionsCache {
      return pageHelper.getDrivingDirectionsCache()
    }
    
    // 'label' attribute on TypeKeyCell (id=State_Cell) at AddressBookSearchLV.pcf: line 76, column 38
    function label_5 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).StateLabel
    }
    
    // 'label' attribute on TextCell (id=PostalCode_Cell) at AddressBookSearchLV.pcf: line 80, column 54
    function label_7 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).PostalCodeLabel
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at AddressBookSearchLV.pcf: line 103, column 42
    function sortValue_10 (contact :  entity.Contact) : java.lang.Object {
      return contact.Score
    }
    
    // 'sortBy' attribute on TextCell (id=DisplayName_Cell) at AddressBookSearchLV.pcf: line 61, column 39
    function sortValue_2 (contact :  entity.Contact) : java.lang.Object {
      return contact
    }
    
    // 'sortBy' attribute on TextCell (id=AddressLine1_Cell) at AddressBookSearchLV.pcf: line 66, column 63
    function sortValue_3 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryAddress.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=City_Cell) at AddressBookSearchLV.pcf: line 71, column 55
    function sortValue_4 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at AddressBookSearchLV.pcf: line 76, column 38
    function sortValue_6 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at AddressBookSearchLV.pcf: line 80, column 54
    function sortValue_8 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactSubtype_Cell) at AddressBookSearchLV.pcf: line 91, column 40
    function sortValue_9 (contact :  entity.Contact) : java.lang.Object {
      return contact.Subtype
    }
    
    // 'value' attribute on RowIterator at AddressBookSearchLV.pcf: line 39, column 87
    function value_69 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return searchResults
    }
    
    // 'visible' attribute on TextCell (id=LinkTo_Cell) at AddressBookSearchLV.pcf: line 53, column 80
    function visible_1 () : java.lang.Boolean {
      return addressBookMatch != null and addressBookMatch.isLinking()
    }
    
    // 'visible' attribute on TextCell (id=GCDistance_Cell) at AddressBookSearchLV.pcf: line 112, column 53
    function visible_11 () : java.lang.Boolean {
      return searchCriteria.ProximitySearch
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at AddressBookSearchLV.pcf: line 119, column 74
    function visible_12 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    property get addressBookMatch () : gw.api.contact.AddressBookMatch {
      return getRequireValue("addressBookMatch", 0) as gw.api.contact.AddressBookMatch
    }
    
    property set addressBookMatch ($arg :  gw.api.contact.AddressBookMatch) {
      setRequireValue("addressBookMatch", 0, $arg)
    }
    
    property get directions () : gw.api.contact.DrivingDirectionsCache {
      return getVariableValue("directions", 0) as gw.api.contact.DrivingDirectionsCache
    }
    
    property set directions ($arg :  gw.api.contact.DrivingDirectionsCache) {
      setVariableValue("directions", 0, $arg)
    }
    
    property get externalContactSource () : gw.api.contact.ExternalContactSource {
      return getRequireValue("externalContactSource", 0) as gw.api.contact.ExternalContactSource
    }
    
    property set externalContactSource ($arg :  gw.api.contact.ExternalContactSource) {
      setRequireValue("externalContactSource", 0, $arg)
    }
    
    property get pageHelper () : gw.api.contact.ProximitySearchPageHelper {
      return getRequireValue("pageHelper", 0) as gw.api.contact.ProximitySearchPageHelper
    }
    
    property set pageHelper ($arg :  gw.api.contact.ProximitySearchPageHelper) {
      setRequireValue("pageHelper", 0, $arg)
    }
    
    property get searchCriteria () : ContactSearchCriteria {
      return getRequireValue("searchCriteria", 0) as ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  ContactSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("searchResults", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set searchResults ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookSearchLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressBookSearchLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=LinkTo_Cell) at AddressBookSearchLV.pcf: line 53, column 80
    function action_17 () : void {
      gw.api.contact.CCAddressBookUtil.linkToMatch(addressBookMatch, contact)
    }
    
    // 'action' attribute on TextCell (id=DisplayName_Cell) at AddressBookSearchLV.pcf: line 61, column 39
    function action_19 () : void {
      AddressBookContactDetailPopup.push(externalContactSource.wrap(contact))
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at AddressBookSearchLV.pcf: line 134, column 74
    function action_64 () : void {
      AddressBookDirectionsPopup.push(directions.getCached(searchCriteria.ProximitySearchCenter, contact.PrimaryAddress))
    }
    
    // 'action' attribute on TextCell (id=DisplayName_Cell) at AddressBookSearchLV.pcf: line 61, column 39
    function action_dest_20 () : pcf.api.Destination {
      return pcf.AddressBookContactDetailPopup.createDestination(externalContactSource.wrap(contact))
    }
    
    // 'action' attribute on TextCell (id=Directions_Cell) at AddressBookSearchLV.pcf: line 134, column 74
    function action_dest_65 () : pcf.api.Destination {
      return pcf.AddressBookDirectionsPopup.createDestination(directions.getCached(searchCriteria.ProximitySearchCenter, contact.PrimaryAddress))
    }
    
    // 'condition' attribute on ToolbarFlag at AddressBookSearchLV.pcf: line 44, column 34
    function condition_15 () : java.lang.Boolean {
      return perm.Contact.deleteab(contact)
    }
    
    // 'label' attribute on TypeKeyCell (id=State_Cell) at AddressBookSearchLV.pcf: line 76, column 38
    function label_29 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).StateLabel
    }
    
    // 'label' attribute on TextCell (id=PostalCode_Cell) at AddressBookSearchLV.pcf: line 80, column 54
    function label_34 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(searchCriteria.Address.Country).PostalCodeLabel
    }
    
    // 'pickValue' attribute on RowIterator at AddressBookSearchLV.pcf: line 39, column 87
    function pickValue_68 () : Contact {
      return gw.api.contact.ContactSystemUtil.INSTANCE.createLocalAndLink(contact)
    }
    
    // 'value' attribute on TextCell (id=AddressLine1_Cell) at AddressBookSearchLV.pcf: line 66, column 63
    function valueRoot_24 () : java.lang.Object {
      return contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=PrimaryPhone_Cell) at AddressBookSearchLV.pcf: line 86, column 46
    function valueRoot_40 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextCell (id=DisplayName_Cell) at AddressBookSearchLV.pcf: line 61, column 39
    function value_21 () : entity.Contact {
      return contact
    }
    
    // 'value' attribute on TextCell (id=AddressLine1_Cell) at AddressBookSearchLV.pcf: line 66, column 63
    function value_23 () : java.lang.String {
      return contact.PrimaryAddress.DisplayAddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at AddressBookSearchLV.pcf: line 71, column 55
    function value_26 () : java.lang.String {
      return contact.PrimaryAddress.DisplayCity
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at AddressBookSearchLV.pcf: line 76, column 38
    function value_30 () : typekey.State {
      return contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at AddressBookSearchLV.pcf: line 80, column 54
    function value_35 () : java.lang.String {
      return contact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TextCell (id=PrimaryPhone_Cell) at AddressBookSearchLV.pcf: line 86, column 46
    function value_39 () : java.lang.String {
      return contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TypeKeyCell (id=ContactSubtype_Cell) at AddressBookSearchLV.pcf: line 91, column 40
    function value_42 () : typekey.Contact {
      return contact.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=CreationStatus_Cell) at AddressBookSearchLV.pcf: line 98, column 27
    function value_45 () : typekey.ContactCreationApprovalStatus {
      return contact.CreateStatus
    }
    
    // 'value' attribute on TextCell (id=Score_Cell) at AddressBookSearchLV.pcf: line 103, column 42
    function value_48 () : java.lang.Integer {
      return contact.Score
    }
    
    // 'value' attribute on TextCell (id=GCDistance_Cell) at AddressBookSearchLV.pcf: line 112, column 53
    function value_52 () : java.lang.String {
      return contact.PrimaryAddress.getDistanceFromAsString(searchCriteria.ProximitySearchCenter)
    }
    
    // 'value' attribute on TextCell (id=DrivingDistance_Cell) at AddressBookSearchLV.pcf: line 119, column 74
    function value_56 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, contact.PrimaryAddress).getTotalDistanceString()
    }
    
    // 'value' attribute on TextCell (id=DrivingTime_Cell) at AddressBookSearchLV.pcf: line 126, column 74
    function value_60 () : java.lang.String {
      return directions.getCached(searchCriteria.ProximitySearchCenter, contact.PrimaryAddress).getTotalTimeInMinutes()
    }
    
    // 'valueVisible' attribute on TextCell (id=LinkTo_Cell) at AddressBookSearchLV.pcf: line 53, column 80
    function visible_16 () : java.lang.Boolean {
      return addressBookMatch.canLinkTo(contact)
    }
    
    // 'visible' attribute on TextCell (id=LinkTo_Cell) at AddressBookSearchLV.pcf: line 53, column 80
    function visible_18 () : java.lang.Boolean {
      return addressBookMatch != null and addressBookMatch.isLinking()
    }
    
    // 'valueVisible' attribute on TextCell (id=GCDistance_Cell) at AddressBookSearchLV.pcf: line 112, column 53
    function visible_51 () : java.lang.Boolean {
      return (contact.PrimaryAddress != null) and (contact.PrimaryAddress.hasLocationInformation())
    }
    
    // 'visible' attribute on TextCell (id=GCDistance_Cell) at AddressBookSearchLV.pcf: line 112, column 53
    function visible_53 () : java.lang.Boolean {
      return searchCriteria.ProximitySearch
    }
    
    // 'valueVisible' attribute on TextCell (id=DrivingDistance_Cell) at AddressBookSearchLV.pcf: line 119, column 74
    function visible_55 () : java.lang.Boolean {
      return directions.haveCached(searchCriteria.ProximitySearchCenter, contact.PrimaryAddress)
    }
    
    // 'visible' attribute on TextCell (id=DrivingDistance_Cell) at AddressBookSearchLV.pcf: line 119, column 74
    function visible_57 () : java.lang.Boolean {
      return pageHelper.displayDirectionsColumns(searchCriteria)
    }
    
    property get contact () : entity.Contact {
      return getIteratedValue(1) as entity.Contact
    }
    
    
  }
  
  
}